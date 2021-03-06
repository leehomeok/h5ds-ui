import React, { useState } from 'react';
import UILayout from '../../../layout/ui-layout';
import { MBModal } from '../../../../h5ds-ui';
import { code } from './code';
import { apis } from './apis';
import { Button } from 'antd';

/**
container,
className,
zIndex = 1000,
height = 400,
width = '90%',
visible,
onCancel,
title,
children,
downClose,
noMargin
 */
export default function Example() {
  const [visible, setVisible] = useState(false);

  const confirm = () => {
    MBModal.confirm({ title: '系统提示', content: '系统消息提示', onCancel: () => {} });
  };

  return (
    <UILayout code={code} apis={apis} info="超简单的弹窗，手机端用的">
      <>
        <Button onClick={() => setVisible(true)}>显示弹窗</Button>&nbsp;&nbsp;
        <Button onClick={confirm}>confirm</Button>
        <MBModal title="标题" footer={true} visible={visible} onCancel={() => setVisible(false)}>
          固定的Modal内容
        </MBModal>
      </>
    </UILayout>
  );
}
