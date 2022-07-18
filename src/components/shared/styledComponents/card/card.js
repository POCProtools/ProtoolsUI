import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomCard = styled(Card)(({ theme }) => ({
	boxShadow: 2,
	borderRadius: 20,
}));

export default CustomCard;
