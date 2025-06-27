import './UserCard.css';

export interface UserCardProps {
  login:     string;
  name:      string;
  avatarUrl: string;
  email:     string;
}

export default function UserCard({
  login,
  name,
  avatarUrl,
  email,
}: UserCardProps) {
  return (
    <div className="user-card">
      <img className="user-card__avatar" src={avatarUrl} alt={`${name} avatar`} />
      <div className="user-card__info">
        <h2 className="user-card__name">{name}</h2>
        <p className="user-card__login">@{login}</p>
        {email && <p className="user-card__email">{email}</p>}
      </div>
    </div>
  );
}