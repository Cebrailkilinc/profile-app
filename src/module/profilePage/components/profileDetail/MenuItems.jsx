import React, { useReducer } from 'react';
import dynamic from 'next/dynamic';
import Loading from '../../../../package/components/content/Loading';
// Dynamic Components
const General = dynamic(() => import('./General'), {
    loading: () => <Loading />,
});
const Evaluations = dynamic(() => import('./Evaluations'), {
    loading: () => <Loading />,
})
const Social = dynamic(() => import('./Social'), {
    loading: () => <Loading />,
})

const Index = ({detailControl,isCommented}) => {
    switch (detailControl) {
        case "general":
            return <General />;
        case "social":
            return <Social />;
        case "evaluation":
            return isCommented ? <Evaluations /> : null;
        default:
            return null;
    }
}

export default Index