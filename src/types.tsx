// export type Step2Plan = 'Arcade' | 'Advanced' | 'Pro' | "";
export type Step2Plan = {name: string, yearlyPrice: string, monthlyPrice: string};

export type Step3AddOn = {
    online: {title: string; monthlyPrice: string; yearlyPrice: string, selected: boolean};
    storage: {title: string; monthlyPrice: string; yearlyPrice: string, selected: boolean};
    profile: {title: string; monthlyPrice: string; yearlyPrice: string, selected: boolean};
};

