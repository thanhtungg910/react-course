import { Col, Divider, Form, message, Row, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useGetCategoriesQuery } from '~/api/category.api';
import { useAddProductMutation } from '~/api/product.api';
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
const ProductAdd = () => {
	const [addProduct, { isSuccess }] = useAddProductMutation();
	const [base64Image, setBase64Image] = useState<string | ArrayBuffer | null>();
	const [imgPreview, setImgPreview] = useState('');
	const navigate = useNavigate();
	const {
		isError: isErrorCategory,
		isSuccess: isSuccessCategory,
		data: dataCategory,
	} = useGetCategoriesQuery('Categories');

	const uploadImage = async (base64Image: string | ArrayBuffer | null) => {
		try {
			const { data } = await uploadImg(base64Image);
			return data.url;
		} catch (err) {
			console.log(err);
			return message.error('upload image fail');
		}
	};

	if (isSuccess) {
		message.success('Tạo sản phẩm thành công');
		navigate('/dash-board/product-manager');
	}
	const onFinish = async (values: ProductType) => {
		if (!base64Image) {
			return;
		}
		if (values.originalPrice <= values.saleOffPrice) {
			await message.warning('Vui lòng kiểm tra lại giá');
			return;
		}
		await message.loading('Loading...');
		const img = await uploadImage(base64Image);
		const payload = {
			...values,
			img,
		};
		addProduct(payload);
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

	return (
		<div>
			<PageHeader title={'Thêm sản phẩm mới'} />
			<Form onFinish={onFinish} autoComplete='off' layout='vertical'>
				<Row gutter={20}>
					<Col flex={2}>
						<ImageStyled>
							<Image onChange={handlerOnChange} imgPreview={imgPreview} />
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
								name='category'
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
								Thêm mới
							</Button>
						</div>
					</Col>
				</Row>
			</Form>
		</div>
	);
};

export default memo(ProductAdd);
