/* eslint-disable no-unused-vars */
import { styled } from '@mui/material/styles';
import { FiMoon, FiBook } from 'react-icons/fi';
import { makeStyles } from 'tss-react/mui';
import { Box, Stack, AppBar, Toolbar, Typography } from '@mui/material';

const APPBAR_MOBILE = 50;
const APPBAR_DESKTOP = 60;

const useStyles = makeStyles()((theme) => {
	return {
		gridContainer: {
			display: 'flex',
			alignItems: 'center',
		},

		textHeader: {
			flex: 1,

			fontWeight: 'normal',
			//margin: 5,
			color: theme.palette.primary.main,
		},
		iconsHeader: {
			flex: 1,
			color: theme.palette.primary.main,
			margin: 5,
		},
	};
});

// TODO : Refactor inside styles instead
const RootStyle = styled(AppBar)(({ theme }) => ({
	boxShadow: 'none',
	backgroundColor: 'transparent',
	position: 'sticky',
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
	minHeight: APPBAR_MOBILE,
	[theme.breakpoints.up('md')]: {
		minHeight: APPBAR_DESKTOP,
		padding: theme.spacing(0, 5),
	},
}));

const NavigationHeader = () => {
	const { classes } = useStyles();
	return (
		<RootStyle>
			<ToolbarStyle>
				<Box sx={{ flexGrow: 1 }} />

				<Stack
					direction='row'
					alignItems='center'
					spacing={{ xs: 0.5, sm: 1.5 }}
				>
					<Box className={classes.gridContainer}>
						<FiMoon className={classes.iconsHeader} />
						<Typography variant='caption' className={classes.textHeader}>
							DarkMode
						</Typography>
					</Box>
					<Box className={classes.gridContainer}>
						<FiBook className={classes.iconsHeader} />
						<Typography variant='caption' className={classes.textHeader}>
							Documentation
						</Typography>
					</Box>
				</Stack>
			</ToolbarStyle>
		</RootStyle>
	);
};

export default NavigationHeader;
