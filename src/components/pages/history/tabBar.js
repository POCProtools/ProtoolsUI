/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { CardContent, Box } from '@mui/material';
import {
	StyledTabs,
	StyledTab,
} from 'components/shared/styledComponents/tabs/tabs';
import { makeStyles } from 'tss-react/mui';
import CustomCard from 'components/shared/styledComponents/card/card';
import { tabPropIndex, TabPanel } from 'components/shared/tabPanel/tabPanel';
import theme from 'theme';
import { columnsTaskDataHistory } from 'utils/dataHistory/mockDataHistory';
import CustomDataGrid from 'components/shared/dataGrid/component';

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
			width: '80%',
			marginLeft: '16%',
			marginTop: '5%',
			[theme.breakpoints.down('md')]: {
				width: '85%',
				marginLeft: '11.5%',
			},
			[theme.breakpoints.down('sm')]: {
				width: '90%',
				marginLeft: '5%',
			},
		},
		cardTab: {
			display: 'flex',
			width: '80%',
			marginLeft: '16%',
			marginTop: '0.5%',
			[theme.breakpoints.down('md')]: {
				width: '85%',
				marginLeft: '11.5%',
			},
			[theme.breakpoints.down('sm')]: {
				width: '90%',
				marginLeft: '5%',
			},
		},
		cardContent: {
			padding: 0,
			'&:last-child': {
				paddingBottom: 0,
			},
		},
		cardContentTable: {
			padding: 0,
			'&:last-child': {
				padding: 12,
			},
			width: '100%',
		},
		tabWidth: {
			width: '98%',
		},
	};
});
const TabBarHistory = (props) => {
	const { classes } = useStyles();
	const [value, setValue] = useState(0);
	//const dataProcess = props.dataProcess;
	const dataTask = props.dataTask;

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<CustomCard className={classes.card}>
				<CardContent className={classes.cardContent}>
					<StyledTabs
						value={value}
						textColor={theme.palette.primary.main}
						indicatorColor={theme.palette.secondary.main}
						onChange={handleChange}
						variant='scrollable'
						allowScrollButtonsMobile
					>
						<StyledTab label='Processus' {...tabPropIndex(0)} />

						<StyledTab label='Tâches' {...tabPropIndex(1)} />
						<StyledTab label='Éléments génériques' {...tabPropIndex(2)} />
					</StyledTabs>
				</CardContent>
			</CustomCard>

			<CustomCard className={classes.cardTab}>
				<TabPanel value={value} index={0} className={classes.tabWidth}>
					<CardContent className={classes.cardContentTable}>
						<CardContent className={classes.cardContentTable}>
							À implémenter
						</CardContent>
					</CardContent>
				</TabPanel>
				<TabPanel value={value} index={1} className={classes.tabWidth}>
					<CardContent className={classes.cardContentTable}>
						<CustomDataGrid
							rows={dataTask}
							columns={columnsTaskDataHistory}
							height='700'
						/>
					</CardContent>
				</TabPanel>
				<TabPanel value={value} index={2} className={classes.tabWidth}>
					<CardContent className={classes.cardContentTable}>
						À implémenter
					</CardContent>
				</TabPanel>
			</CustomCard>
		</>
	);
};

export default TabBarHistory;
