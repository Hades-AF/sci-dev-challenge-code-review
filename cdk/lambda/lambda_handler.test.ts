import { describe, it, expect } from 'vitest';
import { handler, setHttpClient } from './lambda_handler';
import * as wizardMocks from './__mocks__/wizardLambda.mock'

describe('Wizard Lambda', () => {
    
    it('returns 200 status code', async () => {
        process.env.MTG_WIZARD_API_URL = 'https://amazon-mock/wizards';

        setHttpClient(wizardMocks.mockClientWith1ValidWizards)

        const result = await handler();

        expect(result.statusCode).toBe(200);
    });
    
    it('returns 3 wizard cards sorted by power desc', async () => {
        process.env.MTG_WIZARD_API_URL = 'https://amazon-mock/wizards';

        setHttpClient(wizardMocks.mockClientWith3ValidWizards)

        const result = await handler();
        const body = JSON.parse(result.body);

        expect(body.length).toBe(3);
        expect(body[0].name).toBe('El-Hajjâj');
        expect(body[1].name).toBe('Epistolary Librarian');
        expect(body[2].name).toBe('Technomancer');
    });

    it('filters out invalid powers', async () => {
        process.env.MTG_WIZARD_API_URL = 'https://amazon-mock/wizards';

        setHttpClient(wizardMocks.mockClientWithInvalidWizardPowers)

        const result = await handler();
        const body = JSON.parse(result.body);

        expect(result.statusCode).toBe(200);
        expect(body.length).toBe(1);
        expect(body[0].name).toBe('Epistolary Librarian');
    });

        
    it('returns 404 status code', async () => {
        process.env.MTG_WIZARD_API_URL = 'https://amazon-mock/wizards';

        setHttpClient(wizardMocks.mockClientWithInvalidFormat)

        const result = await handler();
        const body = JSON.parse(result.body);

        expect(result.statusCode).toBe(404);

    });
});