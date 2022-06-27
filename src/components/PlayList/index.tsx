import React from 'react';
import PlayItem from '../PlayItem';

type Props = {};

const PlayList = (props: Props) => {
    return (
        <div className="overflow-x-auto my-4">
            <table className="min-w-full text-sm">
                <thead>
                    <tr>
                        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                            #
                        </th>
                        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                            Title
                        </th>
                        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                            Artist
                        </th>
                        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                            Time
                        </th>
                        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                            Album
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <PlayItem data={[]} />
                    <tr className="transition duration-300 py-3 ease-in-out hover:bg-[#ffff]">
                        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                            02
                        </td>
                        <td className="px-4 py-2 text-gray-700 whitespace-nowrap">24/05/1995</td>
                        <td className="px-4 py-2 text-gray-700 whitespace-nowrap">Web Developer</td>
                        <td className="px-4 py-2 text-gray-700 whitespace-nowrap">$120,000</td>
                        <td className="px-4 py-2 text-gray-700 whitespace-nowrap">$120,000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PlayList;
