import { Alert, Checkbox, Form, Input, Typography } from 'antd';
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	UserCredential,
	UserInfo,
} from 'firebase/auth';
import { memo } from 'react';

import { useAppDispatch } from '~/app/hooks';
import Button from '~/components/Button';
import Dialog from '~/components/Dialog';
import { provider } from '~/configs/firebase';
import { User } from '~/types/user';
import { login, loginWithGoogle } from '../userSlice';

const { Text, Title } = Typography;
type Props = {
	show: boolean;
	setShow: any;
	onClick: () => void;
};

const SignInPage = ({ show, onClick }: Props) => {
	const dispatch = useAppDispatch();
	const auth = getAuth();

	const handleLoginWithFirebase = () => {
		signInWithPopup(auth, provider)
			.then((result: UserCredential) => {
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential?.accessToken;
				const user: UserInfo = result.user;
				const payload = {
					email: user?.email,
					id: user?.uid,
				};
				dispatch(loginWithGoogle(payload));
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				const email = error.customData.email;
				const credential = GoogleAuthProvider.credentialFromError(error);
			});
	};
	const onFinish = (values: User) => {
		dispatch(login(values));
	};

	return (
		<Dialog title={<Title level={4}>Đăng nhập</Title>} visible={show}>
			<Alert message='Error' type='error' showIcon />
			<Form
				layout='vertical'
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 32 }}
				initialValues={{ remember: true }}
				onFinish={onFinish}
				size='large'
			>
				<Form.Item
					label='Email'
					name='email'
					rules={[{ required: true, message: 'Please input your email!' }]}
				>
					<Input type='email' />
				</Form.Item>

				<Form.Item
					label='Password'
					name='password'
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item name='remember' valuePropName='checked'>
					<Checkbox>Remember me</Checkbox>
				</Form.Item>

				<Button
					color={'#fff'}
					bgColor='#D70018'
					bgHover='#D70018'
					size='16px'
					padding='0.8em'
				>
					Đăng nhập
				</Button>
				<div
					className='bg-[#0050b3] p-3 w-full rounded-md my-4 text-white text-center cursor-pointer focus:shadow'
					onClick={handleLoginWithFirebase}
				>
					Đăng nhập với tài khoản Google
				</div>
				<Text>Bạn chưa có tài khoản? </Text>
				<Text strong className='cursor-pointer' onClick={onClick}>
					Đăng kí
				</Text>
			</Form>
		</Dialog>
	);
};

export default memo(SignInPage);
