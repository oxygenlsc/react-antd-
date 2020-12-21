import mockjs from 'mockjs';
import { delay } from 'roadhog-api-doc';

const mock = {
  'POST /api/forms': (req, res) => {
    res.send({ message: 'Ok' });
  },
  'GET /api/list': mockjs.mock({
    'list|100': [{
      reportDept: '@city',
      'number|+1': 1,
      'patientId|10000-20000': 1,
      completionDate: '@now("second")',
      'outpatient|300000-400000': 1,
      name: '@cname',
      sex: '@string("男女",1,1)',
      'age|1-99': 1,
      isExamined: '@string("是否",1,1)',
      occupation: '@String("有无",1,1)',
      address: '@county(true)',
      diseaseName: '@ctitle',
    }],
  }),
  ///drugapi/api/WardApplyService/QueryWardBaseDrugs
  'GET /api/':mockjs.mock({
    'code': '200',
    'list|26': [{
      'key|+1':1,
      'drname|3-7': '@string(true)',
      'drserch|2-3': '@string(true)',
      'pack_spec|0-300': 1,
      'drtype_nm|1-3': '@string(true)',
      'packunit|10-100': 10,
      'storage_num|100-200': 10,
    }],
  }),
};

//模拟网络延时 单位ms
export default delay(mock, 200);
