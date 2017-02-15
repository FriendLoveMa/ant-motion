import {
  textStyle,
  bgStyle,
  borderStyle,
} from '../../utils-style';

const component = require('./index');
const templateStr = require('!raw!./index.text');
const less = require('!raw!./index.less');


export default {
  component,
  templateStr,
  less,
  dataSource: {
    content5: {
      style: {
        height: {
          value: '100vh',
          name: '区块高度',
          remark: '请填写上单位 "px" 或 "vh", 如果在第一屏且导航没加 fixed, 一屏为 calc(100vh - 64px)',
        },
        ...bgStyle(),
        ...borderStyle(),
      },
    },
    content5_video: {
      style: {
        width: {
          value: '90%',
          name: '视频宽度',
        },
        maxWidth: {
          value: '800px',
          name: '最大宽度',
        },
        top: {
          value: '20%',
          name: '顶部距离',
        },
        boxShadow: {
          value: '0 2px 6px rgba(0,0,0,0.2)',
          name: '区块阴影',
          remark: '参数: x y blur color;',
          length: 4,
        },
        borderRadius: {
          value: '6px',
          name: '区块圆角',
        },
      },
      children: {
        value: 'https://os.alipayobjects.com/rmsportal/EejaUGsyExkXyXr.mp4',
        name: '视频地址',
      },
    },
    content5_title: {
      style: {
        width: {
          value: '100%',
          name: '区块宽度',
        },
        top: {
          value: '10%',
          name: '顶部距离',
        },
        ...textStyle({
          size: '32px',
          color: '#404040',
          align: 'center',
          lineHeight: '48px',
        }),
        margin: {
          value: 'auto',
          name: 'margin',
          length: 4,
        },
      },
      children: {
        value: '蚂蚁金融云提供专业的服务',
        name: '标题文字',
      },
    },
    content5_content: {
      style: {
        ...textStyle({
          size: '12px',
          lineHeight: '24px',
        }),
        maxWidth: {
          value: '600px',
          name: '最大宽度',
        },
      },
      children: {
        value: '科技想象力，金融创造力',
        name: '详细说明',
      },
    },
  },
};
