import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comprovantes, setComprovantes] = useState<any[]>([]);
  const [whatsappContacts, setWhatsappContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      fetchComprovantes();
      fetchWhatsappContacts();
    }
  }, [isLoggedIn]);

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session?.user?.email === 'admin@asgard.com') {
      setIsLoggedIn(true);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error || data.user?.email !== 'admin@asgard.com') {
        throw new Error('Acesso negado. Apenas administradores podem acessar.');
      }

      setIsLoggedIn(true);
      toast({
        title: "Login realizado com sucesso!",
        description: "Bem-vindo ao painel administrativo."
      });

    } catch (error: any) {
      toast({
        title: "Erro no login",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsLoggedIn(false);
    navigate('/');
  };

  const fetchComprovantes = async () => {
    try {
      const { data, error } = await supabase
        .from('comprovantes')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setComprovantes(data || []);
    } catch (error) {
      console.error('Erro ao buscar comprovantes:', error);
    }
  };

  const fetchWhatsappContacts = async () => {
    try {
      const { data, error } = await supabase
        .from('whatsapp_contacts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setWhatsappContacts(data || []);
    } catch (error) {
      console.error('Erro ao buscar contatos WhatsApp:', error);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('comprovantes')
        .update({ status })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Status atualizado!",
        description: `Comprovante ${status} com sucesso.`
      });

      fetchComprovantes();
    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao atualizar status.",
        variant: "destructive"
      });
    }
  };

  const downloadComprovante = async (url: string, nome: string) => {
    try {
      const { data, error } = await supabase.storage
        .from('comprovantes')
        .download(url);

      if (error) throw error;

      const link = document.createElement('a');
      link.href = URL.createObjectURL(data);
      link.download = nome;
      link.click();
    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao baixar comprovante.",
        variant: "destructive"
      });
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: any = {
      pendente: "secondary",
      aprovado: "default",
      rejeitado: "destructive"
    };
    return <Badge variant={variants[status] || "secondary"}>{status}</Badge>;
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-asgard-orange">Admin Asgard</CardTitle>
            <CardDescription>
              Faça login para acessar o painel administrativo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@asgard.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Sua senha"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full" 
                variant="asgard"
                disabled={loading}
              >
                {loading ? "Entrando..." : "Entrar"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Painel Administrativo</h1>
            <p className="text-gray-400">Gerencie os comprovantes de pagamento</p>
          </div>
          <Button onClick={handleLogout} variant="outline">
            Sair
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-asgard-orange">Painel de Administração</CardTitle>
            <CardDescription>
              Gerencie comprovantes de pagamento e contatos WhatsApp
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="comprovantes" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="comprovantes">Comprovantes</TabsTrigger>
                <TabsTrigger value="whatsapp">Contatos WhatsApp</TabsTrigger>
              </TabsList>
              
              <TabsContent value="comprovantes" className="mt-6">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nome</TableHead>
                        <TableHead>Usuário</TableHead>
                        <TableHead>E-mail</TableHead>
                        <TableHead>WhatsApp</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Data</TableHead>
                        <TableHead>Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {comprovantes.map((comprovante) => (
                        <TableRow key={comprovante.id}>
                          <TableCell className="font-medium">{comprovante.nome}</TableCell>
                          <TableCell>{comprovante.usuario}</TableCell>
                          <TableCell>{comprovante.email}</TableCell>
                          <TableCell>{comprovante.whatsapp}</TableCell>
                          <TableCell>{getStatusBadge(comprovante.status)}</TableCell>
                          <TableCell>
                            {new Date(comprovante.created_at).toLocaleDateString('pt-BR')}
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2 flex-wrap">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => downloadComprovante(comprovante.comprovante_url, comprovante.comprovante_nome)}
                              >
                                Download
                              </Button>
                              {comprovante.status === 'pendente' && (
                                <>
                                  <Button
                                    size="sm"
                                    variant="default"
                                    onClick={() => updateStatus(comprovante.id, 'aprovado')}
                                  >
                                    Aprovar
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="destructive"
                                    onClick={() => updateStatus(comprovante.id, 'rejeitado')}
                                  >
                                    Rejeitar
                                  </Button>
                                </>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  {comprovantes.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      Nenhum comprovante enviado ainda.
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="whatsapp" className="mt-6">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nome</TableHead>
                        <TableHead>Usuário</TableHead>
                        <TableHead>E-mail</TableHead>
                        <TableHead>Data</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {whatsappContacts.map((contact) => (
                        <TableRow key={contact.id}>
                          <TableCell className="font-medium">{contact.nome}</TableCell>
                          <TableCell>{contact.usuario}</TableCell>
                          <TableCell>{contact.email}</TableCell>
                          <TableCell>
                            {new Date(contact.created_at).toLocaleDateString('pt-BR', {
                              day: '2-digit',
                              month: '2-digit', 
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  {whatsappContacts.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      Nenhum contato WhatsApp registrado ainda.
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;