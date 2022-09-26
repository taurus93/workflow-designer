import {Component, Input, OnInit} from '@angular/core';
import {IDENTITY_VERIFICATION, NODE_TYPE, ROLE_TYPE, UserNode} from "./tree.model";

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  ROLE_TYPE = ROLE_TYPE;
  NODE_TYPE = NODE_TYPE;
  @Input() nodeType: NODE_TYPE = NODE_TYPE.SINGLE;
  @Input() nodes: UserNode[] | undefined = [
    {
      type: NODE_TYPE.SINGLE,
      name: "Signer",
      rule: {
        type: ROLE_TYPE.SIGNER,
        required: false,
        editable: true
      },
      email: "",
      userNode: [],
      identityVerification: IDENTITY_VERIFICATION.NONE
    },
    {
      type: NODE_TYPE.SINGLE,
      name: "Signer 1",
      rule: {
        type: ROLE_TYPE.SIGNER,
        required: true,
        editable: true
      },
      email: "",
      userNode: [],
      identityVerification: IDENTITY_VERIFICATION.NONE
    },
    {
      type: NODE_TYPE.SINGLE,
      name: "Recipient 2",
      rule: {
        type: ROLE_TYPE.APPROVER,
        required: true,
        editable: true
      },
      email: "",
      userNode: [],
      identityVerification: IDENTITY_VERIFICATION.NONE
    },
    {
      type: NODE_TYPE.BRANCH,
      userNode: [
        {
          type: NODE_TYPE.SINGLE,
          name: "Signer 3",
          rule: {
            type: ROLE_TYPE.SIGNER,
            required: false,
            editable: true
          },
          email: "",
          userNode: [],
          identityVerification: IDENTITY_VERIFICATION.NONE
        },
        {
          type: NODE_TYPE.SINGLE,
          name: "Signer 4",
          rule: {
            type: ROLE_TYPE.SIGNER,
            required: false,
            editable: true
          },
          email: "",
          userNode: [],
          identityVerification: IDENTITY_VERIFICATION.NONE
        },
        {
          type: NODE_TYPE.SINGLE,
          name: "Signer 5",
          rule: {
            type: ROLE_TYPE.SIGNER,
            required: false,
            editable: true
          },
          email: "",
          userNode: [],
          identityVerification: IDENTITY_VERIFICATION.NONE
        },
      ],
    },
    {
      type: NODE_TYPE.SINGLE,
      name: "Recipient 3",
      rule: {
        type: ROLE_TYPE.APPROVER,
        required: true,
        editable: true
      },
      email: "",
      userNode: [],
      identityVerification: IDENTITY_VERIFICATION.NONE
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
