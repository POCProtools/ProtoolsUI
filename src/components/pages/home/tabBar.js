import React, { useState } from 'react';
import { CardContent } from '@mui/material';
import {
	StyledTabs,
	StyledTab,
} from 'components/shared/styledComponents/tabs/tabs';
import { makeStyles } from 'tss-react/mui';
import CustomCard from 'components/shared/styledComponents/card/card';
import { tabPropIndex, TabPanel } from 'components/shared/tabPanel/tabPanel';
import CustomDataGrid from '../../shared/dataGrid/component';
import theme from 'theme';
import { columns, columnsManu } from 'utils/mockData';

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
			marginLeft: '19%',
			marginTop: '1%',
			[theme.breakpoints.down('md')]: {
				width: '80%',
				marginLeft: '14%',
			},
			[theme.breakpoints.down('sm')]: {
				width: '90%',
				marginLeft: '5%',
			},
		},
		cardTab: {
			display: 'flex',
			//alignItems: 'center',
			//justifyContent: 'center',
			width: '75%',
			marginLeft: '19%',
			marginTop: '0.5%',
			[theme.breakpoints.down('md')]: {
				width: '80%',
				marginLeft: '14%',
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
			padding: 15,
			'&:last-child': {
				paddingBottom: 20,
				paddingTop: 3,
			},
		},
	};
});
const TabBarDashboard = (props) => {
	const { classes } = useStyles();
	const [value, setValue] = useState(0);
	const dataProcess = props.dataProcess;
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
					>
						<StyledTab
							label='Processus'
							{...tabPropIndex(0)}
							className={classes.MuiTab}
						/>

						<StyledTab
							label='Tâches manuelles'
							{...tabPropIndex(1)}
							className={classes.MuiTab}
						/>
						<StyledTab
							label='Incidents'
							{...tabPropIndex(2)}
							className={classes.MuiTab}
						/>
					</StyledTabs>
				</CardContent>
			</CustomCard>

			<CustomCard className={classes.cardTab}>
				<CardContent className={classes.cardContentTable}>
					<TabPanel value={value} index={0}>
						<CustomDataGrid data={dataProcess} columns={columns} />
					</TabPanel>
					<TabPanel value={value} index={1}>
						<CustomDataGrid data={dataTask} columns={columnsManu} />
					</TabPanel>
					<TabPanel value={value} index={2}>
						<CustomDataGrid data={dataProcess} columns={columns} />
					</TabPanel>
				</CardContent>
			</CustomCard>
		</>
	);
};

export default TabBarDashboard;
