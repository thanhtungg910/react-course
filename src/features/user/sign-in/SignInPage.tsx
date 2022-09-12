import { Alert, Checkbox, Form, Input, message, Typography } from 'antd';
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	UserCredential,
	UserInfo,
} from 'firebase/auth';
import { memo, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { signIn } from '~/api/auth.api';

import { useAppDispatch, useAppSelector } from '~/app/hooks';
import images from '~/assets/logo';
import Button from '~/components/Button';
import Dialog from '~/components/Dialog';
import { provider } from '~/configs/firebase';
import { mixins } from '~/GlobalClasses';
import { User } from '~/types/user';
import userSelector from '../userSelector';
import { login, loginSuccess, loginWithGoogle } from '../userSlice';

const WrapperStyled = styled.div`
	position: relative;
	height: 100vh;
	background: #e5e5e5;
`;
const InnerStyled = styled.div`
	width: 50%;
	position: absolute;
	top: 50%;
	left: 50%;
	background-color: #f8f8f8;
	transform: translate(-50%, -50%);
	border-radius: 20px;
	h2.text-center {
		margin-top: 10px;
		text-align: center;
	}
`;
const ContentStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ImageStyled = styled.div`
	display: block;
	aspect-ratio: 16 / 9;
	align-items: center;
	img {
		margin-left: auto;
		margin-right: auto;
	}
`;

const FormStyled = styled(Form)`
	border-top-left-radius: 20px;
	border-bottom-left-radius: 20px;
	background: #fff;
	padding: 50px;
	flex: 1;
`;
const ActionStyled = styled.div`
	margin-top: 10px;
	${mixins.flexCenter}
	gap: 20px;
	span {
		cursor: pointer;
		max-width: 58px;
		max-height: 58px;
	}
`;

const SignInPage = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	// const auth = getAuth();

	const onFinish = async (values?: any) => {
		try {
			const {
				data: { user },
			} = await signIn(values);
			if (user.email) {
				await message.success('Login success');
				dispatch(loginSuccess(user));
				navigate('/');
				return;
			}
		} catch (error: any) {
			message.error(error?.response?.data || 'Vui lòng kiểm tra lại');
		}
	};

	return (
		<WrapperStyled>
			<InnerStyled>
				<ContentStyled>
					<FormStyled
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
							rules={[
								{ required: true, message: 'Please input your password!' },
							]}
						>
							<Input.Password />
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
						<h2 className='text-center'>Hoặc đăng nhập bằng</h2>
						<ActionStyled>
							<span>
								<img src={images.facebook} alt='facebook' />
							</span>
							<span>
								<img src={images.google} alt='google' />
							</span>
						</ActionStyled>
						<div className='text-xs'>
							Bạn chưa có tài khoản <Link to='/sign-up'>Đăng ký</Link>
						</div>
					</FormStyled>
					<ImageStyled>
						<img src={images.anhhtusLogo2} alt='LOGO' />
					</ImageStyled>
				</ContentStyled>
			</InnerStyled>
		</WrapperStyled>
	);
};

export default memo(SignInPage);
