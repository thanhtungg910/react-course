/* eslint-disable no-console */
import { Col, Divider, Form, message, Row, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { memo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useGetCategoriesQuery } from '~/api/category.api';

import {
	useGetProductQuery,
	useUpdateProductMutation,
} from '~/api/product.api';
import uploadImg from '~/api/upload-img.api';
import Button from '~/components/Button';
import Image from '~/components/Image';
import Input, { SizeInput } from '~/components/Input';
import PageHeader from '~/components/PageHeader';
import { mixins } from '~/GlobalClasses';
import { Category } from '~/types/category.type';
import { ProductType } from '~/types/product.type';
import { checkImage } from '~/utils/helper';

const ImageStyled = styled.div`
	${mixins.flexCenter}
`;
const ProductEdit = () => {
	const { id } = useParams();
	const [base64Image, setBase64Image] = useState<string | ArrayBuffer | null>();
	const [imgPreview, setImgPreview] = useState('');
	const navigate = useNavigate();

	const { isSuccess, data } = useGetProductQuery(id);
	const [updateProduct, { isError, isSuccess: isSuccessUpdate }] =
		useUpdateProductMutation();
	const {
		isError: isErrorCategory,
		isSuccess: isSuccessCategory,
		data: dataCategory,
	} = useGetCategoriesQuery('Categories');

	if (isSuccessUpdate) {
		navigate('/dash-board/product-manager');
	}
	if (isError) {
		message.error('Không thể cập nhật');
		navigate('/dash-board/product-manager');
	}
	const onFinish = async (values: ProductType) => {
		let img: string = data.img;
		if (values.originalPrice <= values.saleOffPrice) {
			await message.warning('Vui lòng kiểm tra lại giá');
			return;
		}
		if (base64Image) {
			await message.loading('Loading...');
			img = await uploadImage(base64Image);
		}
		const payload = {
			...values,
			img,
			id: data.id,
		};
		updateProduct(payload);
	};
	const handlerOnChange = (event: any) => {
		const file = event?.target.files[0];
		if (!checkImage(file, message)) {
			return;
		}

		file.preview = URL.createObjectURL(file);
		setImgPreview(file.preview);
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setBase64Image(reader?.result);
		};
	};
	const uploadImage = async (base64Image: string | ArrayBuffer | null) => {
		try {
			const { data } = await uploadImg(base64Image);
			return data.url;
		} catch (err) {
			console.log(err);
			message.error('upload image fail');
			return;
		}
	};

	return (
		<div>
			<PageHeader title={'Cập nhât sản phẩm'} />
			{isSuccess && (
				<Form
					onFinish={onFinish}
					autoComplete='off'
					layout='vertical'
					initialValues={data}
				>
					<Row gutter={20}>
						<Col flex={2}>
							<ImageStyled>
								<Image
									onChange={handlerOnChange}
									imgPreview={imgPreview}
									img={data.img}
								/>
							</ImageStyled>
							<div className='short-desc'>
								<h2>Mô tả ngắn</h2>
								<Form.Item
									name='desc_short'
									rules={[
										{
											required: true,
											message: 'Vui lòng không để trống trường này!',
										},
									]}
								>
									<TextArea showCount maxLength={100} style={{ height: 120 }} />
								</Form.Item>
							</div>
						</Col>
						<Col flex={3} className='flex-col'>
							<h2 className='text-xl'>Thông tin sản phẩm</h2>
							<Divider />
							<div>
								<Input
									placeholder={'Tên sản phẩm'}
									label={<h2>Tên sản phẩm</h2>}
									required={true}
									size={SizeInput.LARGE}
									name='name'
								/>
							</div>
							<div className='flex justify-between gap-4'>
								<Input
									placeholder={'Giá gốc'}
									label={<h2>Giá gốc</h2>}
									type='number'
									required={true}
									size={SizeInput.LARGE}
									name='originalPrice'
									className='flex flex-col flex-1'
								/>
								<Input
									placeholder={'Giá khuyến mại'}
									label={<h2>Giá khuyến mại</h2>}
									type='number'
									required={true}
									size={SizeInput.LARGE}
									name='saleOffPrice'
									className='flex flex-col flex-1'
								/>
							</div>
							<div className='w-1/2'>
								<h2>Danh mục</h2>
								<Form.Item
									name='categoryId'
									rules={[
										{
											required: true,
											message: 'Vui lòng không để trống trường này!',
										},
									]}
								>
									<Select allowClear size='large'>
										{isSuccessCategory &&
											dataCategory.map((item: Category) => (
												<Select.Option key={item.id} value={item.id}>
													{item.name}
												</Select.Option>
											))}
									</Select>
								</Form.Item>
							</div>
							<div>
								<h2>Đặc điểm nổi bật</h2>
								<Form.Item
									name='feature'
									rules={[
										{
											required: true,
											message: 'Vui lòng không để trống trường này!',
										},
									]}
								>
									<TextArea showCount maxLength={100} style={{ height: 120 }} />
								</Form.Item>
							</div>
							<div>
								<h2>Mô tả dài</h2>
								<Form.Item
									name='description'
									rules={[
										{
											required: true,
											message: 'Vui lòng không để trống trường này!',
										},
									]}
								>
									<TextArea showCount maxLength={100} style={{ height: 120 }} />
								</Form.Item>
							</div>
							<div className='w-1/6 mt-3 p-2'>
								<Button
									color='#fff'
									bgColor='#00B0D7'
									bgHover='#00B0D7'
									size={'18px'}
								>
									Cập nhật
								</Button>
							</div>
						</Col>
					</Row>
				</Form>
			)}
		</div>
	);
};

export default memo(ProductEdit);
