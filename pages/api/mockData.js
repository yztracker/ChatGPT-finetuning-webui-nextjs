import { NextApiRequest, NextApiResponse } from 'next';

const fineTuningJobs = [
  // ... 保留原有的fine-tuning job物件並複制4次，每次稍作修改...
  {
    "object": "fine_tuning.job",
    "id": "ft-zRdUkP4QeZqeYjDcQL0wwam1",
    "model": "davinci-002",
    "created_at": 1692661014,
    "finished_at": 1692661190,
    "fine_tuned_model": "ft:davinci-002:my-org:custom_suffix:7q8mpxmy",
    "organization_id": "org-123",
    "result_files": [
        "file-abc123"
    ],
    "status": "succeeded",
    "validation_file": null,
    "training_file": "file-abc123",
    "hyperparameters": {
        "n_epochs": 4,
    },
    "trained_tokens": 5768
  },
  {
    "object": "fine_tuning.job",
    "id": "ft-zRdUkP4QeZqeYjDcQL0wwam1",
    "model": "davinci-002",
    "created_at": 1692661014,
    "finished_at": 1692661190,
    "fine_tuned_model": "ft:davinci-002:my-org:custom_suffix:7q8mpxmy",
    "organization_id": "org-123",
    "result_files": [
        "file-abc123"
    ],
    "status": "succeeded",
    "validation_file": null,
    "training_file": "file-abc123",
    "hyperparameters": {
        "n_epochs": 4,
    },
    "trained_tokens": 5768
  },
  {
    "object": "fine_tuning.job",
    "id": "ft-zRdUkP4QeZqeYjDcQL0wwam1",
    "model": "davinci-002",
    "created_at": 1692661014,
    "finished_at": 1692661190,
    "fine_tuned_model": "ft:davinci-002:my-org:custom_suffix:7q8mpxmy",
    "organization_id": "org-123",
    "result_files": [
        "file-abc123"
    ],
    "status": "succeeded",
    "validation_file": null,
    "training_file": "file-abc123",
    "hyperparameters": {
        "n_epochs": 4,
    },
    "trained_tokens": 5768
  },
  {
    "object": "fine_tuning.job",
    "id": "ft-zRdUkP4QeZqeYjDcQL0wwam1",
    "model": "davinci-002",
    "created_at": 1692661014,
    "finished_at": 1692661190,
    "fine_tuned_model": "ft:davinci-002:my-org:custom_suffix:7q8mpxmy",
    "organization_id": "org-123",
    "result_files": [
        "file-abc123"
    ],
    "status": "succeeded",
    "validation_file": null,
    "training_file": "file-abc123",
    "hyperparameters": {
        "n_epochs": 4,
    },
    "trained_tokens": 5768
  },

  // ... 其他四筆測試資料...
];

const files = [
  // ... 保留原有的file物件並複制4次，每次稍作修改...
  {
    "id": "file-abc123",
    "object": "file",
    "bytes": 120000,
    "created_at": 1677610602,
    "filename": "my_file.jsonl",
    "purpose": "fine-tune",
    "format": "fine-tune-chat",
    "status": "uploaded",
    "status_details": null
  },
  {
    "id": "file-abc123",
    "object": "file",
    "bytes": 120000,
    "created_at": 1677610602,
    "filename": "my_file.jsonl",
    "purpose": "fine-tune",
    "format": "fine-tune-chat",
    "status": "uploaded",
    "status_details": null
  },
  {
    "id": "file-abc123",
    "object": "file",
    "bytes": 120000,
    "created_at": 1677610602,
    "filename": "my_file.jsonl",
    "purpose": "fine-tune",
    "format": "fine-tune-chat",
    "status": "uploaded",
    "status_details": null
  },

  // ... 其他四筆測試資料...
];

export default function handler(req, res) {
  res.status(200).json({ fineTuningJobs, files });
}
