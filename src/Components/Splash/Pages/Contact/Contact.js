import React from 'react';
import emailjs from '@emailjs/browser';
import { Popover, Text } from '@nextui-org/react';

import {
  Grommet,
  Box,
  Button,
  Form,
  FormField,
  MaskedInput,
  TextArea,
  TextInput,
} from 'grommet';

const theme = {
  global: {
    colors: {
      focus: '#01ffff'
    }
  },
  formField: {
    label: {
      size: 'small'
    }
  }
}

const Contact = props => {
  const form = React.useRef();

  const [to_name, setToName] = React.useState('Zach');
  const [from_name, setFromName] = React.useState('');
  const [message, setMessage] = React.useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);

    emailjs.sendForm('service_3wh5k4g', 'template_v7goata', form.current, '9dDfLbFoZurbCagy1')
      .then((result) => {
          console.log(result.text);
          let po_btn = document.getElementById('po_btn');
          po_btn.click();
      }, (error) => {
          console.log(error.text);
      });
  };
 
  return (
    <div>
      <p>Let's make cool stuff</p>
      <Grommet theme={theme}>
        <Box align="center" justify="center" pad="large">
          <Box width="medium">
            <Form
              ref={form}
              onChange={(value) => console.log('Change', value)}
              onReset={() => {
                setFromName('');
                setMessage('');
              }}
              onSubmit={(event) => {
                sendEmail(event);
                setFromName('');
                setMessage('');
              }}
            >
              <FormField label="Name" htmlFor="name" name="name" style={{ marginBottom: '2em', display: 'none' }}>
                <TextInput
                  id="to_name"
                  name="to_name"
                  value={to_name}
                  placeholder='your name'
                  style={{ fontFamily: 'Arial', fontSize: '1rem' }}
                />
              </FormField>
              <FormField label="Email" htmlFor="email" name="email" style={{ marginBottom: '2em'}}>
                <MaskedInput
                  id="from_name"
                  name="from_name"
                  mask={[
                    { regexp: /^[\w\-_.]+$/, placeholder: 'example' },
                    { fixed: '@' },
                    { regexp: /^[\w]+$/, placeholder: 'my' },
                    { fixed: '.' },
                    { regexp: /^[\w]+$/, placeholder: 'com' },
                  ]}
                  value={from_name}
                  onChange={(event) => setFromName(event.target.value)}
                  style={{ fontFamily: 'Arial', fontSize: '1rem' }}
                />
              </FormField>
              <FormField name="value" label="What can I help you with?">
                <TextArea 
                  value={message} 
                  name="message" 
                  placeholder="give me some details about your project" 
                  style={{ fontFamily: 'Arial', fontSize: '1rem' }} 
                  onChange={(event) => setMessage(event.target.value)}
                />
              </FormField>
              <Box direction="row" justify="between" margin={{ top: 'medium' }}>
                <Button color={props.theme === 'light' ? '#222' : 'whitesmoke'} type="reset" label="Reset" />
                <Button color={props.theme === 'light' ? '#222' : 'whitesmoke'} type="submit" label="Submit" primary />
              </Box>
            </Form>
            <Popover>
              <Popover.Trigger>
                <Button id='po_btn' style={{display: 'none'}} auto flat>Open Popover</Button>
              </Popover.Trigger>
              <Popover.Content>
                <Text css={{ p: "$10" }}>Your email has been sent</Text>
              </Popover.Content>
            </Popover>
          </Box>
        </Box>
      </Grommet>
    </div>
  )
};

export default Contact;