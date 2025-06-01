import { HttpClient } from '../lambda_handler';

export const mockClientWith1ValidWizards: HttpClient  = {
    get: async () => ({
        data: {
            cards: [
                { name: 'Epistolary Librarian', power: '3' }
            ]
        }
    }),
};

export const mockClientWith3ValidWizards: HttpClient = {
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

export const mockClientWithInvalidWizardPowers: HttpClient = {
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

export const mockClientWithInvalidFormat: HttpClient = {
    get: async () => ({
        data: {
            cards: []
        }
    }),
};