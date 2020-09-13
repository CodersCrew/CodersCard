import React from 'react';

import { FilterTab, TabProps } from '.';

export default {
  title: 'FilterTab',
  component: FilterTab,
  excludeStories: /.*Data$/,
};

const baseTabPropsData: Partial<TabProps> = {};

export const BaseFilterTab = (): JSX.Element => {
  return <FilterTab {...baseTabPropsData} />;
};
