const mongoose = require('mongoose');

const LogDataSchema = new mongoose.Schema(
{
  logId: Number,
  applicationId: Number,
  applicationType: String,
  companyId: Number,
  actionType: String,
  ip: String,
  userAgent: String,
  userId: Number,
  source: String,
  ownerId: Number,
  logInfo: String,
  creationTimestamp: String
}
);

const LogData = mongoose.model('LogData', LogDataSchema);
module.exports = LogData;