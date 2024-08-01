"use client";

import { trpc } from "@/server/client";
import {
  EditOutlined,
  HeartFilled,
  HeartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Card } from "antd";

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
  graphId: string;
}

export const ChartCard = ({ title, children, graphId }: ChartCardProps) => {
  const getFavorites = trpc.favorites.getFavorites.useQuery();
  const toggleFavorite = trpc.favorites.toggleFavorite.useMutation({
    onSuccess: () => getFavorites.refetch(),
  });

  const { data } = getFavorites;

  const isFavorite = data?.some((favorite) => favorite.graphId === graphId);

  const handleToggleFavorite = () => {
    toggleFavorite.mutate({ graphId });
  };

  return (
    <Card
      title={
        <div className="flex justify-between items-center">
          <span>{title}</span>
          <Button
            icon={
              isFavorite ? (
                <HeartFilled style={{ color: "red" }} />
              ) : (
                <HeartOutlined />
              )
            }
            onClick={handleToggleFavorite}
            loading={toggleFavorite.isPending || getFavorites.isPending}
          />
        </div>
      }
      className="w-full"
      actions={[
        <Avatar icon={<UserOutlined />} key="avatar" />,
        <EditOutlined key="edit" />,
      ]}
    >
      {children}
    </Card>
  );
};
