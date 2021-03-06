import React from 'react';
import Skeleton from 'react-loading-skeleton';

const styles = {
    container: {
        height: '395px',
        margin: 5,
        backgroundColor: 'white',
        padding: 10,
    },
    content: {
        paddingTop: 10,
    },
};

const SkeletonLoader = () => {
    return (
        <div className="skeleton">
            <div style={styles.container}>
                <Skeleton height={'83%'} />
                <div style={styles.content}>
                    <Skeleton width={'85%'} />
                    <div />
                    <Skeleton width={'75%'} />
                </div>
            </div>
        </div>
    );
};

export default SkeletonLoader;
