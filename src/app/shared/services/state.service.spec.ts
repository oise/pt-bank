import { StateService } from './state.service';

describe('State Service', () => {
  let service: StateService;
  beforeEach(() => {
    service = new StateService();
    service.setState({ demoState: 'demo value' });
  });

  it('state returns initialized value', () => {
    expect(service.state.demoState).toBe('demo value');
  });

  it('state can be update', (done: DoneFn) => {
    service.setState({ demoState: 'new value' });
    service
      .select((state) => state.demoState)
      .subscribe((demoState) => {
        expect(demoState).toBe('new value');
        done();
      });
  });
});
