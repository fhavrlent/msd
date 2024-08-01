import { EditOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
}

export const ChartCard = ({ title, children }: ChartCardProps) => {
  return (
    <Card
      title={title}
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
