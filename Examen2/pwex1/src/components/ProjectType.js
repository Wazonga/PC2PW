import React from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup'

function ToggleButtonExample() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'FrontEnd ', value: '1' },
    { name: 'BackEnd', value: '2' },

  ];

  return (
    <>
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  );
}

render(<ToggleButtonExample />);


<Form>
  {['checkbox', 'radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="1"
        name="HTML"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        label="2"
        name="CSS"
        type={type}
        id={`inline-${type}-2`}
      />
      <Form.Check
        inline
        disabled
        label="JAVASCRIPT"
        type={type}
        id={`inline-${type}-3`}
      />
    </div>
  ))}
</Form>
