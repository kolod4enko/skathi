import { Batch } from './providers/batch';
import { requests } from './requests';
import { JsonRpc } from './providers/jsonRpc';

export default {
  provider: JsonRpc,
  batch: Batch,
  requests,
};
