import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();
  return <Button variant="contained" color="inherit" style={{ marginTop: 20 }} onClick={() => router.back()}>取消并返回</Button>;
}

export default BackButton;