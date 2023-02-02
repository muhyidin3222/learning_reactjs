import { List, Form, Input, InputNumber, Button, Card } from 'antd';
import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from './service/base'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

function App() {
  const [form] = Form.useForm();
  const [dataList, setDataList] = useState([])
  const [dataInput, setDataInput] = useState({})
  useEffect(() => {
    getAxios()
  }, [])
  const getAxios = async () => {
    const { data } = await axios.get()
    setDataList(data)
  }

  const onFinish = async (values) => {
    console.log(values, 'values')
    if (dataInput?.id) {
      await axios.put("/" + dataInput?.id, {
        ...values?.user
      })
    } else {
      await axios.post("", {
        ...values?.user
      })
    }
    setDataInput({})
    getAxios()
    form.resetFields();
  };

  const actionDelete = async (id) => {
    await axios.delete("/" + id)
    getAxios()
  }

  const onChange = (param) => {
    console.log(param.target.name)
    setDataInput({
      ...dataInput,
      [param.target.name]: param.target.value
    })
  }

  console.log(dataInput, 'dataList')
  return <Card>
    <Form
      form={form}
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          value={dataInput?.name}
          onChange={onChange}
          name={'name'}
        />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input
          value={dataInput?.email}
          onChange={onChange}
          name={'email'}
        />
      </Form.Item>
      <Form.Item
        name={['user', 'age']}
        label="Age"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 99,
          },
        ]}
      >
        <InputNumber
          value={dataInput?.age}
          onChange={onChange}
          name={'age'}
        />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button type="primary" htmlType="submit">
          {dataInput?.id ? "Update" : "Submit"}
        </Button>
      </Form.Item>
    </Form>

    <List
      itemLayout="horizontal"
      dataSource={dataList}
      renderItem={(item) => (
        <List.Item
          actions={[
            <Button danger onClick={() => actionDelete(item?.id)}>Delete</Button>,
            <Button onClick={() => {
              setDataInput(item)
              form.setFieldsValue({ user: item })
            }}>Edit</Button>
          ]}
        >
          <List.Item.Meta
            title={<a href="https://ant.design">{item.name}</a>}
            description={`email : ${item?.email || ""}, age : ${item?.age || ""}`}
          />
        </List.Item>
      )}
    />
  </Card>;
}

export default App;