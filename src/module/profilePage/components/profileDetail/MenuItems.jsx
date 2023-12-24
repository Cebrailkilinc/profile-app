import React, { useReducer } from 'react';
import dynamic from 'next/dynamic';

import Loading from '../../../../package/components/content/Loading';

// Dynamic Components
const TabItemGeneral = dynamic(() => import('./TabItemGeneral'), {
    loading: () => <Loading />,
});
const TabsItemSocial = dynamic(() => import('./TabsItemSocial'), {
    loading: () => <Loading />,
});
const TabsItemEvaluations = dynamic(() => import('./TabsItemEvaluations'), {
    loading: () => <Loading />,
})

const MenuItems = ({ detailControl, isCommented }) => {
    switch (detailControl) {
        case "general":
            return <TabItemGeneral />;
        case "social":
            return <TabsItemSocial />;
        case "evaluation":
            return isCommented ? <TabsItemEvaluations /> : null;
        default:
            return null;
    }
}

export default MenuItems