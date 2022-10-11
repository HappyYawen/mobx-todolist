### mobx 工作流程
事件触发->actions->去改变存储的状态->存储状态改变后，更新基于状态的派生状态->触发视图更新
![avatar](./md-image/work_line.jpg)

### 状态变化更新视图的必要条件
1. 状态必须标记为 **observable**
2. 更改状态的方法必须被标记为 **action**
3. 组件必须通过 **observer** 方法包裹