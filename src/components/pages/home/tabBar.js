import React, { useState } from 'react';
import { Tab, CardContent } from '@mui/material';

import { makeStyles } from 'tss-react/mui';
import CustomCard from 'components/shared/stylesComponents/card';
import { tabPropIndex, TabPanel } from 'components/shared/tabPanel';
import { StyledTab } from 'components/shared/stylesComponents/tabs';
import { StyledTabs } from '../../shared/stylesComponents/tabs';
import EnhancedTable from './tableGrid';

const useStyles = makeStyles()((theme) => {
	return {
		root: {
			body: {
				backgroundColor: theme.palette.background.default,
			},
		},
		card: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			width: '75%',
			marginLeft: '22%',
			marginTop: '1%',
		},
		cardTab: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'left',
			width: '75%',
			marginLeft: '22%',
			marginTop: '0.5%',
		},
		cardContent: {
			padding: 20,
		},
		MuiTab: {
			root: {
				'&:hover': {
					backgroundColor: theme.palette.secondary.pressed,
					color: theme.palette.primary.main,
				},
			},
			selected: {
				backgroundColor: theme.palette.secondary.pressed,
				color: theme.palette.primary.main,
			},
		},
	};
});
const TabBarDashboard = () => {
	const { classes } = useStyles();
	const [value, setValue] = useState('0');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<>
			<CustomCard className={classes.card}>
				<CardContent className={classes.cardContent}>
					<StyledTabs value={value} onChange={handleChange}>
						<StyledTab
							label='Processus'
							{...tabPropIndex(0)}
							className={classes.MuiTab}
						/>

						<Tab
							label='Tâches manuelles'
							{...tabPropIndex(1)}
							className={classes.MuiTab}
						/>
						<Tab
							label='Incidents'
							{...tabPropIndex(2)}
							className={classes.MuiTab}
						/>
					</StyledTabs>
				</CardContent>
			</CustomCard>
			<CustomCard className={classes.cardTab}>
				<CardContent className={classes.cardContent}>
					<TabPanel value={value} index={0}>
						<EnhancedTable />
					</TabPanel>
					<TabPanel value={value} index={1}>
						Item Two
					</TabPanel>
					<TabPanel value={value} index={2}>
						Item Three
					</TabPanel>
				</CardContent>
			</CustomCard>
		</>
	);
};

export default TabBarDashboard;
