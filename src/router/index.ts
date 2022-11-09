import { Router } from 'express';
import { AnalyseParams, NonWorkingDaysParams } from '~/interface';
import { executeMethod, getError } from '~/utils/axiosRequest';

const defaultHeaders = {
  'X-RapidAPI-Key': 'db857c1dacmsh205ad5310bd7a1fp180a4fjsn373a3f65c121',
  'X-RapidAPI-Host': 'working-days.p.rapidapi.com',
};

const router = Router();
router.get('/list_non_working_days', async (req, res) => {
  console.log(req.method, req.url);
  const body: NonWorkingDaysParams  = req.body;
  try {
    const response = await executeMethod('GET', defaultHeaders, 'list_non_working_days', {
      ...body,
    });
    res.send(response);
  } catch (e: any) {
    const error = getError(e);
    console.log(error);
    throw e;
  }
});

router.get('/analyse', async (req, res) => {
  console.log(req.method, req.url);
  const body: AnalyseParams  = req.body;

  try {
    const response = await executeMethod('GET', defaultHeaders, 'analyse', {
      ...body,
    });
    res.send(response);
  } catch (e: any) {
    const error = getError(e);
    console.log(error);
    throw e;
  }
});

export default router;
