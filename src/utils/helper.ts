/* eslint-disable eqeqeq */
import { MessageApi } from 'antd/lib/message';

export const checkImage = (
	file: any,
	fallback: MessageApi
): boolean | undefined => {
	// if (file?.type != 'image/png' || file?.type != 'image/jpeg') {
	// 	fallback.warning('Vui lòng đúng định dạng');
	// 	return false;
	// }
	if (+file?.size >= 220665) {
		fallback.warning('Dung lượng ảnh quá lơn');
		return false;
	}
	return true;
};
