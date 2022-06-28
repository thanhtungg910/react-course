import React from 'react';
import PlayItem from '../PlayItem';

type Props = {};

const PlayList = (props: Props) => {
    return (
        <div className="overflow-x-auto my-4">
            <table className="min-w-full text-sm">
                <thead>
                    <tr>
                        <th className="text-base px-4 py-2 text-center font-medium text-text1  whitespace-nowrap">
                            #
                        </th>
                        <th className="text-base px-4 py-2 text-center font-medium text-text1  whitespace-nowrap">
                            Title
                        </th>
                        <th className="text-base px-4 py-2 text-center font-medium text-text1  whitespace-nowrap">
                            Artist
                        </th>
                        <th className="text-base px-4 py-2 text-center font-medium text-text1  whitespace-nowrap">
                            Time
                        </th>
                        <th className="text-base px-4 py-2 text-center font-medium text-text1  whitespace-nowrap">
                            Album
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <PlayItem data={[]} />
                </tbody>
            </table>
        </div>
    );
};

export default PlayList;
