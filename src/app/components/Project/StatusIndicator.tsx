import { EnumStatus } from '@/types';
import { statusLabels, statusGradients } from '@/app/data/const';
import { Clock } from 'lucide-react';

export default function StatusIndicator({ status }: { status: EnumStatus }) {
	// Convert status to a percentage for visual representation
	const percentage = (status / 4) * 100;

	return (
		<div className="flex flex-col gap-2">
			<div className="flex items-center justify-between">
				<div className="flex items-center">
					<Clock size={16} className="text-gray-400 mr-2" />
					<span className="text-sm font-medium text-gray-300">{statusLabels[status]}</span>
				</div>
				<span className="text-sm font-medium text-gray-300">{status}/4</span>
			</div>
			<div className="w-full bg-gray-800 rounded-full h-2.5">
				<div
					className={`h-2.5 rounded-full bg-gradient-to-r ${statusGradients[status]}`}
					style={{ width: `${percentage}%` }}
				></div>
			</div>
		</div>
	);
}
