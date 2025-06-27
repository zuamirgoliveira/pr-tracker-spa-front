import { useEffect, useState } from 'react';
import api from '../../api/api';
import UserCard, { type UserCardProps } from '../../components/UserCard';

export default function UserPage() {
  const [user, setUser]     = useState<UserCardProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState<string>();

  useEffect(() => {
    api.get<UserCardProps>('/user')
      .then(res => {
        setUser(res.data);
      })
      .catch(err => {
        console.error(err);
        setError('Não foi possível carregar o perfil');
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Carregando perfil…</p>;
  if (error)   return <p>{error}</p>;
  if (!user)   return <p>Usuário não encontrado</p>;

  return <UserCard {...user} />;
}