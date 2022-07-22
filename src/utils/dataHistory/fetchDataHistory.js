import { fetcherGet } from 'core/fetchData/fetchData';
import theme from 'theme';
import Moment from 'moment';

export const fetchTaskDataHistory = () => {
	const urlEndpoint = 'history/activity/';
	const apiUrl = process.env.REACT_APP_API_URL + urlEndpoint;
	const dataUrl = [];
	fetcherGet(apiUrl)
		.then((r) => {
			const taskFilter = ['userTask', 'serviceTask', 'subProcess'];
			const datatmp = r.data.filter((item) => {
				return taskFilter.includes(item.activityType);
			});
			console.log('Activities response: ', datatmp);
			for (let i = 0; i < 20; i++) {
				dataUrl.push({
					id: datatmp[i].id,
					name: datatmp[i].name,
					type: datatmp[i].activityType,
					processID: datatmp[i].processInstanceId,
					endDate: Moment(datatmp[i].endTime).format('DD/MM/YYYY - HH:mm'),
					duration: datatmp[i].durationInMillis,
				});
			}
			console.log('dataUrlPastActivities: ', dataUrl);
		})
		.catch((e) => {
			console.log(e);
		});

	return [dataUrl];
};
