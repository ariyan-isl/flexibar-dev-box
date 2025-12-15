export const countdownAnimation = [
  {
    name: "None",
    html: `
        <span style="
        margin-left: 10px;
        font-family: '{{fontFamily}}';
        font-size: {{fontSize}}px;
        font-weight: {{fontWeight}};
        color: {{color}};">
        <span id='{{name}}-day' style="
        font-family: '{{fontFamily}}';
        font-size: {{fontSize}}px;
        font-weight: {{fontWeight}};
        color: {{color}};
        width: auto;
        height: auto;
        margin-top: -4px;" className="text">{{days}}d</span>
        </span>
        <span style="
        font-family: '{{fontFamily}}';
        font-size: {{fontSize}}px;
        font-weight: {{fontWeight}};
        color: {{color}};">:</span>
        <span>
        <span id='{{name}}-hours' style="
        font-family: '{{fontFamily}}';
        font-size: {{fontSize}}px;
        font-weight: {{fontWeight}};
        color: {{color}};
        width: auto;
        height: auto;
        margin-top: -4px;" className="text">{{hours}}h</span>
        </span>
        <span style="
        font-family: '{{fontFamily}}';
        font-size: {{fontSize}}px;
        font-weight: {{fontWeight}};
        color: {{color}};">:</span>
        <span>
            <span id='{{name}}-mnt' style="
        font-family: '{{fontFamily}}';
        font-size: {{fontSize}}px;
        font-weight: {{fontWeight}};
        color: {{color}};
            width: auto;
            height: auto;
            margin-top: -4px;" className="text">{{minutes}}m</span>
        </span>
        <span className="value" style="
        font-family: '{{fontFamily}}';
        font-size: {{fontSize}}px;
        font-weight: {{fontWeight}};
        color: {{color}};">:</span>
        <span>
        <span id='{{name}}-sec' style="
        font-family: '{{fontFamily}}';
        font-size: {{fontSize}}px;
        font-weight: {{fontWeight}};
        color: {{color}};
        width: auto;
        height: auto;
        margin-top: -4px;" className="text">{{seconds}}s</span>
        </span>`,
  },
  {
    name: "Style1",
    html: `
        <span id='{{name}}-day' 
        style="
        text-align: center;
        background: {{background}};
        color: {{color}};
        margin-left: 3px;
        padding: 5px;
        border-radius: 3px;
        box-shadow: {{shadow}} 2px 4px 5px;
        font-family: '{{fontFamily}}';
        font-size: {{fontSize}}px;
        font-weight: {{fontWeight}};">
        {{days}}d
        </span>
        <span style="color: {{background}}; 
        font-family: '{{fontFamily}}';
        font-size: {{fontSize}}px;
        font-weight: {{fontWeight}};">:</span>
        <span id='{{name}}-hours' 
        style="
        text-align: center;
        background: {{background}};
        color: {{color}};
        margin-left: 3px;
        padding: 5px;
        border-radius: 3px;
        box-shadow: {{shadow}} 2px 4px 5px;
        font-family: '{{fontFamily}}';
        font-size: {{fontSize}}px;
        font-weight: {{fontWeight}};">
        {{hours}}h
        </span>
        <span style="color: {{background}}; 
        font-family: '{{fontFamily}}';
        font-size: {{fontSize}}px;
        font-weight: {{fontWeight}};">:</span>
        <span id='{{name}}-mnt' 
        style="
        text-align: center;
        background: {{background}};
        color: {{color}};
        margin-left: 3px;
        padding: 5px;
        border-radius: 3px;
        box-shadow: {{shadow}} 2px 4px 5px;
        font-family: '{{fontFamily}}';
        font-size: {{fontSize}}px;
        font-weight: {{fontWeight}};">
        {{minutes}}m
        </span>
        <span 
        style="color: {{background}}; 
        font-family: '{{fontFamily}}';
        font-size: {{fontSize}}px;
        font-weight: {{fontWeight}};" className="value">:</span>
        <span id='{{name}}-sec' 
        style="
        text-align: center;
        background: {{background}};
        color: {{color}};
        margin-left: 3px;
        padding: 5px;
        border-radius: 3px;
        box-shadow: {{shadow}} 2px 4px 5px;
        font-family: '{{fontFamily}}';
        font-size: {{fontSize}}px;
        font-weight: {{fontWeight}};">
        {{seconds}}s
        </span>`,
  },
  {
    name: "Style2",
    html: `
        <span style="
        text-align: center;
        background: {{background}};
        color: {{color}};
        margin-left: 3px;
        padding: 5px;
        border-radius: 3px;
        box-shadow: {{shadow}} 2px 4px 5px;
        font-family: '{{fontFamily}}';
        font-size: {{fontSize}}px;
        font-weight: {{fontWeight}};
        display: inline-flex;
        flex-direction: column;">
        <span id='{{name}}-days'>
        {{days}}
        </span>
        <span style="font-size: {{fontSize}}px; font-weight: {{fontWeight}}; margin-top: -7px;">DAYS</span>
        </span>
        <span style="color: {{background}}; 
        font-family: '{{fontFamily}}';
        font-size: {{fontSize}}px;
        font-weight: {{fontWeight}};">:</span>
        <span style="
        text-align: center;
        background: {{background}};
        color: {{color}};
        margin-left: 3px;
        padding: 5px;
        border-radius: 3px;
        box-shadow: {{shadow}} 2px 4px 5px;
        font-family: '{{fontFamily}}';
        font-size: {{fontSize}}px;
        font-weight: {{fontWeight}};
        display: inline-flex;
        flex-direction: column;">
        <span id='{{name}}-hours'>
        {{hours}}
        </span>
        <span style="font-size: {{fontSize}}px; font-weight: {{fontWeight}}; margin-top: -7px;">HRS</span>
        </span>
        <span style="color: {{background}}; 
        font-family: '{{fontFamily}}';
        font-size: {{fontSize}}px;
        font-weight: {{fontWeight}};">:</span>
        <span style="
        text-align: center;
        background: {{background}};
        color: {{color}};
        margin-left: 3px;
        padding: 5px;
        border-radius: 3px;
        box-shadow: {{shadow}} 2px 4px 5px;
        font-family: '{{fontFamily}}';
        font-size: {{fontSize}}px;
        font-weight: {{fontWeight}};
        display: inline-flex;
        flex-direction: column;">
        <span id='{{name}}-mnt'>
        {{minutes}}
        </span>
        <span style="font-size: {{fontSize}}px; font-weight: {{fontWeight}}; margin-top: -7px;">MINS</span>
        </span>
        <span 
        style="color: {{background}}; 
        font-family: '{{fontFamily}}';
        font-size: {{fontSize}}px;
        font-weight: {{fontWeight}};" className="value">:</span>
        <span style="
        text-align: center;
        background: {{background}};
        color: {{color}};
        margin-left: 3px;
        padding: 5px;
        border-radius: 3px;
        box-shadow: {{shadow}} 2px 4px 5px;
        font-family: '{{fontFamily}}';
        font-size: {{fontSize}}px;
        font-weight: {{fontWeight}};
        display: inline-flex;
        flex-direction: column;">
        <span id='{{name}}-sec' >
        {{seconds}}
        </span>
        <span style="font-size: {{fontSize}}px; font-weight: {{fontWeight}}; margin-top: -7px;">SECS</span>
        </span>`,
  },
  {
    name: "Style3",
    html: `
        <span style="
        text-align: center;
        background: {{background}};
        color: {{color}};
        margin-left: 3px;
        padding: 5px;
        border-radius: 3px;
        box-shadow: {{shadow}} 2px 4px 5px;
        font-family: '{{fontFamily}}';
        font-size: {{fontSize}}px;
        font-weight: {{fontWeight}};">
        <span id='{{name}}-days'>
        {{days}}
        </span>
        <span style="font-size: {{fontSize}}px; font-weight: {{fontWeight}}; margin-top: -7px;">DAYS</span>
        </span>
        <span style="color: {{background}}; 
        font-family: '{{fontFamily}}';
        font-size: {{fontSize}}px;
        font-weight: {{fontWeight}};">&nbsp;</span>
        <span style="
        text-align: center;
        background: {{background}};
        color: {{color}};
        margin-left: 3px;
        padding: 5px;
        border-radius: 3px;
        box-shadow: {{shadow}} 2px 4px 5px;
        font-family: '{{fontFamily}}';
        font-size: {{fontSize}}px;
        font-weight: {{fontWeight}};">
        <span id='{{name}}-hours'>
        {{hours}}
        </span>
        <span style="font-size: {{fontSize}}px; font-weight: {{fontWeight}}; margin-top: -7px;">HRS</span>
        </span>
        <span style="color: {{background}}; 
        font-family: '{{fontFamily}}';
        font-size: {{fontSize}}px;
        font-weight: {{fontWeight}};">&nbsp;</span>
        <span style="
        text-align: center;
        background: {{background}};
        color: {{color}};
        margin-left: 3px;
        padding: 5px;
        border-radius: 3px;
        box-shadow: {{shadow}} 2px 4px 5px;
        font-family: '{{fontFamily}}';
        font-size: {{fontSize}}px;
        font-weight: {{fontWeight}};">
        <span id='{{name}}-mnt'>
        {{minutes}}
        </span>
        <span style="font-size: {{fontSize}}px; font-weight: {{fontWeight}}; margin-top: -7px;">MINS</span>
        </span>
        <span 
        style="color: {{background}}; 
        font-family: '{{fontFamily}}';
        font-size: {{fontSize}}px;
        font-weight: {{fontWeight}};" className="value">&nbsp;</span>
        <span style="
        text-align: center;
        background: {{background}};
        color: {{color}};
        margin-left: 3px;
        padding: 5px;
        border-radius: 3px;
        box-shadow: {{shadow}} 2px 4px 5px;
        font-family: '{{fontFamily}}';
        font-size: {{fontSize}}px;
        font-weight: {{fontWeight}};">
        <span id='{{name}}-sec' >
        {{seconds}}
        </span>
        <span style="font-size: {{fontSize}}px; font-weight: {{fontWeight}}; margin-top: -7px;">SECS</span>
        </span>
        `,
  },
  {
    name: "Style4",
    html: `
        <span style="
          text-align: center;
          color: {{color}};
          font-family: '{{fontFamily}}';
          font-size: {{fontSize}}px;
          font-weight: {{fontWeight}};
          vertical-align: middle;
        ">
          <span id="{{name}}-days" style="border: 2px solid {{shadow}}; background: {{background}}; border-radius: 5px; padding: 5px; vertical-align: middle; font-family: '{{fontFamily}}'; font-size: {{fontSize}}px; font-weight: {{fontWeight}};">{{days}}</span> : 
          <span id="{{name}}-hours" style="border: 2px solid {{shadow}}; background: {{background}}; border-radius: 5px; padding: 5px; vertical-align: middle; font-family: '{{fontFamily}}'; font-size: {{fontSize}}px; font-weight: {{fontWeight}};">{{hours}}</span> : 
          <span id="{{name}}-mnt" style="border: 2px solid {{shadow}}; background: {{background}}; border-radius: 5px; padding: 5px; vertical-align: middle; font-family: '{{fontFamily}}'; font-size: {{fontSize}}px; font-weight: {{fontWeight}};">{{minutes}}</span> : 
          <span id="{{name}}-sec" style="border: 2px solid {{shadow}}; background: {{background}}; border-radius: 5px; padding: 5px; vertical-align: middle; font-family: '{{fontFamily}}'; font-size: {{fontSize}}px; font-weight: {{fontWeight}};">{{seconds}}</span>
        </span>
        `,
  },
];
