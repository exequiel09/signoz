import { DatePicker, Modal } from 'antd';
import { Moment } from 'moment';
import moment from 'moment';
import React, { useState } from 'react';
import { DateTimeRangeType } from 'store/actions';

const { RangePicker } = DatePicker;

interface CustomDateTimeModalProps {
	visible: boolean;
	onCreate: (dateTimeRange: DateTimeRangeType) => void; //Store is defined in antd forms library
	onCancel: () => void;
}

const CustomDateTimeModal: React.FC<CustomDateTimeModalProps> = ({
	//destructuring props
	visible,
	onCreate,
	onCancel,
}) => {
	const [
		customDateTimeRange,
		setCustomDateTimeRange,
	] = useState<DateTimeRangeType>();

	function handleRangePickerOk(date_time: DateTimeRangeType): void {
		setCustomDateTimeRange(date_time);
	}
	function disabledDate(current: Moment): boolean {
		if (current > moment()) {
			return true;
		} else {
			return false;
		}
	}

	return (
		<Modal
			visible={visible}
			title="Chose date and time range"
			okText="Apply"
			cancelText="Cancel"
			onCancel={onCancel}
			style={{ position: 'absolute', top: 60, right: 40 }}
			onOk={(): void => onCreate(customDateTimeRange ? customDateTimeRange : null)}
		>
			<RangePicker
				disabledDate={disabledDate}
				onOk={handleRangePickerOk}
				showTime
			/>
		</Modal>
	);
};

export default CustomDateTimeModal;
