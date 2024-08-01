import { EditOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Divider } from "antd";

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
}

export const ChartCard: React.FC<ChartCardProps> = ({ title, children }) => {
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
