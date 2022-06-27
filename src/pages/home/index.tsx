import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import Banner from '../../components/Banner';
import PlayList from '../../components/PlayList';

const Home = () => {
    return (
        <div>
            <h3 className="text-lg text-[##B6ADAA]">What's hot 🐱‍🏍</h3>
            <div className="flex justify-between my-2">
                <h2 className="text-lg sm:text-4xl font-mono font-bold">Trending</h2>
                <Link
                    className="inline-flex items-center px-8 py-3 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text1 active:text-indigo-500 focus:outline-none focus:ring"
                    to="#"
                >
                    <span className="text-sm font-medium">More</span>
                    <svg
                        className="w-5 h-5 ml-3"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </Link>
            </div>
            <Banner autoplay={false}>
                <div>
                    <aside className="flex relative overflow-hidden text-gray-300 bg-gray-900  bg-[#fff] rounded-xl">
                        <div className="w-full p-4 text-center sm:p-16 lg:text-left">
                            <div className="max-w-xl mx-auto lg:ml-0">
                                <p className="text-sm font-medium">Lorem ipsum dolor sit amet.</p>
                                <p className="mt-2 text-xl font-bold text-white sm:text-3xl">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit
                                </p>
                                <p className="hidden text-xl lg:mt-4 lg:block">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                                    egestas tempus tellus etiam sed. Quam a scelerisque amet
                                    ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
                                    quisque ut interdum tincidunt duis.
                                </p>
                                <a
                                    href=""
                                    className="inline-block px-5 py-3 sm:mt-8 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                                >
                                    Get started today
                                </a>
                            </div>
                        </div>
                        <div className="relative w-full  h-52 sm:h-96 lg:w-1/2">
                            <img
                                src="https://picsum.photos/300/300"
                                alt="Women smiling at college"
                                className="absolute inset-0 object-cover w-full h-full"
                            />
                        </div>
                    </aside>
                </div>
                <div>
                    <aside className="flex relative overflow-hidden text-gray-300 bg-gray-900  bg-[#fff] rounded-xl">
                        <div className="w-full text-center sm:p-16 lg:text-left">
                            <div className="max-w-xl mx-auto lg:ml-0">
                                <p className="text-sm font-medium">Lorem ipsum dolor sit amet.</p>
                                <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit
                                </p>
                                <p className="hidden lg:mt-4 lg:block">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                                    egestas tempus tellus etiam sed. Quam a scelerisque amet
                                    ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
                                    quisque ut interdum tincidunt duis.
                                </p>
                                <a
                                    href=""
                                    className="inline-block px-5 py-3 mt-8 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                                >
                                    Get started today
                                </a>
                            </div>
                        </div>
                        <div className="relative w-full h-full sm:h-96 lg:w-1/2">
                            <img
                                src="https://picsum.photos/seed/picsum/300/300"
                                alt="Women smiling at college"
                                className="absolute inset-0 object-cover w-full h-full"
                            />
                        </div>
                    </aside>
                </div>
            </Banner>
            <div className="flex justify-between items-center items-center my-4">
                <h2 className="text-lg sm:text-4xl font-mono font-bold">Listen the most</h2>
                <Link
                    className="inline-flex items-center px-5 py-3 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text1 active:text-indigo-500 focus:outline-none focus:ring"
                    to="#"
                >
                    <span className="text-lg font-medium">Show more</span>
                    <svg
                        className="w-5 h-5 ml-3"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </Link>
            </div>
            <>
                <PlayList></PlayList>
            </>
        </div>
    );
};

export default Home;
