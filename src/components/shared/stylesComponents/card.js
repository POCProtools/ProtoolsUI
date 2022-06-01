import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomCard = styled(Card)(({ theme }) => ({
	color: 'primary',
	borderRadius: 20,
	boxShadow: 4,
	//position: "relative",
	//zIndex: 0,
}));

export default CustomCard;
