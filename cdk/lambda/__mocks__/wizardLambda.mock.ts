export const mockClientWith1ValidWizards  = {
    get: async () => ({
        data: {
            cards: [
                { name: 'Epistolary Librarian', power: '3' }
            ]
        }
    }),
};

export const mockClientWith3ValidWizards = {
    get: async () => ({
        data: {
            cards: [
                { name: 'Epistolary Librarian', power: '3' },
                { name: 'El-Hajjâj', power: '1' },
                { name: 'Technomancer', power: '5' },
            ]
        }
    }),
};

export const mockClientWithInvalidWizardPowers = {
    get: async () => ({
        data: {
            cards: [
                { name: 'Epistolary Librarian', power: '3' },
                { name: 'El-Hajjâj', power: '!' },
                { name: 'Technomancer', power: 'X' },
                { name: 'Master of Etherium', power: '*' },
            ]
        }
    }),
};

export const mockClientWithInvalidFormat = {
    get: async () => ({
        data: {
            cards: []
        }
    }),
};