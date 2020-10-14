import dva from 'dva';
import './index.css';

// 1. Initialize 创建视图
// const app = dva();

const app = dva({
   initialState: {
     products: [
       { name: 'dva', id: 1 },
       { name: 'antd', id: 2 },
     ],
   },
 });

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/products').default);

// 4. Router 注册视图
app.router(require('./router').default);

// 5. Start 启动
app.start('#root');
