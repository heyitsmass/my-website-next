import { EnumStatus } from '../../types';
import {
	AppWindow,
	Cloud,
	Code,
	Component,
	Cpu,
	Database,
	Globe,
	HardDrive,
	Layers,
	LineChart,
	TabletSmartphone,
	Webhook,
} from 'lucide-react';
const statusLabels = ['Concept', 'In Progress', 'Halfway', 'Almost Done', 'Completed'];

const statusGradients = {
	[EnumStatus.CONCEPT]: 'from-red-600 to-red-400',
	[EnumStatus.IN_PROGRESS]: 'from-orange-600 to-orange-400',
	[EnumStatus.HALFWAY]: 'from-yellow-600 to-yellow-400',
	[EnumStatus.ALMOST_DONE]: 'from-blue-600 to-blue-400',
	[EnumStatus.COMPLETED]: 'from-emerald-600 to-emerald-400',
};

const skillIcons = {
	code: Code,
	data: Database,
	web: Globe,
	ai: Cpu,
	analytics: LineChart,
	cloud: Cloud,
	devops: Layers,
	api: Webhook,
	backend: HardDrive,
	mobile: TabletSmartphone,
	design: Component,
	cms: AppWindow,
};

export const skillCategories = {
	code: 'Code',
	data: 'Databases',
	web: 'Frontend',
	cloud: 'Cloud',
	devops: 'DevOps',
	api: 'API',
	backend: 'Backend',
	mobile: 'Mobile',
	design: 'Design',
	cms: 'CMS',
};

export const STATUS = {
	[EnumStatus.CONCEPT]: 0,
	[EnumStatus.IN_PROGRESS]: 1,
	[EnumStatus.HALFWAY]: 2,
	[EnumStatus.ALMOST_DONE]: 3,
	[EnumStatus.COMPLETED]: 4,
};

export { statusGradients, statusLabels, skillIcons };
