// source: app.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.grpc_author.AppReq', null, global);
goog.exportSymbol('proto.grpc_author.AppReq.AppTraffic', null, global);
goog.exportSymbol('proto.grpc_author.AppReq.Operation', null, global);
goog.exportSymbol('proto.grpc_author.AppRes', null, global);
goog.exportSymbol('proto.grpc_author.AppRes.Status', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpc_author.AppReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.grpc_author.AppReq.repeatedFields_, null);
};
goog.inherits(proto.grpc_author.AppReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grpc_author.AppReq.displayName = 'proto.grpc_author.AppReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpc_author.AppReq.AppTraffic = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpc_author.AppReq.AppTraffic, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grpc_author.AppReq.AppTraffic.displayName = 'proto.grpc_author.AppReq.AppTraffic';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpc_author.AppReq.Operation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpc_author.AppReq.Operation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grpc_author.AppReq.Operation.displayName = 'proto.grpc_author.AppReq.Operation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpc_author.AppRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpc_author.AppRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grpc_author.AppRes.displayName = 'proto.grpc_author.AppRes';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.grpc_author.AppReq.repeatedFields_ = [3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpc_author.AppReq.prototype.toObject = function(opt_includeInstance) {
  return proto.grpc_author.AppReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpc_author.AppReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpc_author.AppReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    appId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    nameSpace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    trafficsList: jspb.Message.toObjectList(msg.getTrafficsList(),
    proto.grpc_author.AppReq.AppTraffic.toObject, includeInstance),
    operationsList: jspb.Message.toObjectList(msg.getOperationsList(),
    proto.grpc_author.AppReq.Operation.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpc_author.AppReq}
 */
proto.grpc_author.AppReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpc_author.AppReq;
  return proto.grpc_author.AppReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpc_author.AppReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpc_author.AppReq}
 */
proto.grpc_author.AppReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAppId(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNameSpace(value);
      break;
    case 3:
      var value = new proto.grpc_author.AppReq.AppTraffic;
      reader.readMessage(value,proto.grpc_author.AppReq.AppTraffic.deserializeBinaryFromReader);
      msg.addTraffics(value);
      break;
    case 4:
      var value = new proto.grpc_author.AppReq.Operation;
      reader.readMessage(value,proto.grpc_author.AppReq.Operation.deserializeBinaryFromReader);
      msg.addOperations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpc_author.AppReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpc_author.AppReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpc_author.AppReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpc_author.AppReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getNameSpace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTrafficsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.grpc_author.AppReq.AppTraffic.serializeBinaryToWriter
    );
  }
  f = message.getOperationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.grpc_author.AppReq.Operation.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpc_author.AppReq.AppTraffic.prototype.toObject = function(opt_includeInstance) {
  return proto.grpc_author.AppReq.AppTraffic.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpc_author.AppReq.AppTraffic} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpc_author.AppReq.AppTraffic.toObject = function(includeInstance, msg) {
  var f, obj = {
    unit: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFieldWithDefault(msg, 2, 0),
    seq: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpc_author.AppReq.AppTraffic}
 */
proto.grpc_author.AppReq.AppTraffic.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpc_author.AppReq.AppTraffic;
  return proto.grpc_author.AppReq.AppTraffic.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpc_author.AppReq.AppTraffic} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpc_author.AppReq.AppTraffic}
 */
proto.grpc_author.AppReq.AppTraffic.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnit(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSeq(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpc_author.AppReq.AppTraffic.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpc_author.AppReq.AppTraffic.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpc_author.AppReq.AppTraffic} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpc_author.AppReq.AppTraffic.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUnit();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getSeq();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional string unit = 1;
 * @return {string}
 */
proto.grpc_author.AppReq.AppTraffic.prototype.getUnit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.grpc_author.AppReq.AppTraffic} returns this
 */
proto.grpc_author.AppReq.AppTraffic.prototype.setUnit = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 value = 2;
 * @return {number}
 */
proto.grpc_author.AppReq.AppTraffic.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.grpc_author.AppReq.AppTraffic} returns this
 */
proto.grpc_author.AppReq.AppTraffic.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 seq = 3;
 * @return {number}
 */
proto.grpc_author.AppReq.AppTraffic.prototype.getSeq = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.grpc_author.AppReq.AppTraffic} returns this
 */
proto.grpc_author.AppReq.AppTraffic.prototype.setSeq = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpc_author.AppReq.Operation.prototype.toObject = function(opt_includeInstance) {
  return proto.grpc_author.AppReq.Operation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpc_author.AppReq.Operation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpc_author.AppReq.Operation.toObject = function(includeInstance, msg) {
  var f, obj = {
    endPoint: jspb.Message.getFieldWithDefault(msg, 1, ""),
    operationId: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpc_author.AppReq.Operation}
 */
proto.grpc_author.AppReq.Operation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpc_author.AppReq.Operation;
  return proto.grpc_author.AppReq.Operation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpc_author.AppReq.Operation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpc_author.AppReq.Operation}
 */
proto.grpc_author.AppReq.Operation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndPoint(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOperationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpc_author.AppReq.Operation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpc_author.AppReq.Operation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpc_author.AppReq.Operation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpc_author.AppReq.Operation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEndPoint();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOperationId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional string end_point = 1;
 * @return {string}
 */
proto.grpc_author.AppReq.Operation.prototype.getEndPoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.grpc_author.AppReq.Operation} returns this
 */
proto.grpc_author.AppReq.Operation.prototype.setEndPoint = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 operation_id = 2;
 * @return {number}
 */
proto.grpc_author.AppReq.Operation.prototype.getOperationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.grpc_author.AppReq.Operation} returns this
 */
proto.grpc_author.AppReq.Operation.prototype.setOperationId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 app_id = 2;
 * @return {number}
 */
proto.grpc_author.AppReq.prototype.getAppId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.grpc_author.AppReq} returns this
 */
proto.grpc_author.AppReq.prototype.setAppId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string name_space = 1;
 * @return {string}
 */
proto.grpc_author.AppReq.prototype.getNameSpace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.grpc_author.AppReq} returns this
 */
proto.grpc_author.AppReq.prototype.setNameSpace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated AppTraffic traffics = 3;
 * @return {!Array<!proto.grpc_author.AppReq.AppTraffic>}
 */
proto.grpc_author.AppReq.prototype.getTrafficsList = function() {
  return /** @type{!Array<!proto.grpc_author.AppReq.AppTraffic>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.grpc_author.AppReq.AppTraffic, 3));
};


/**
 * @param {!Array<!proto.grpc_author.AppReq.AppTraffic>} value
 * @return {!proto.grpc_author.AppReq} returns this
*/
proto.grpc_author.AppReq.prototype.setTrafficsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.grpc_author.AppReq.AppTraffic=} opt_value
 * @param {number=} opt_index
 * @return {!proto.grpc_author.AppReq.AppTraffic}
 */
proto.grpc_author.AppReq.prototype.addTraffics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.grpc_author.AppReq.AppTraffic, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.grpc_author.AppReq} returns this
 */
proto.grpc_author.AppReq.prototype.clearTrafficsList = function() {
  return this.setTrafficsList([]);
};


/**
 * repeated Operation operations = 4;
 * @return {!Array<!proto.grpc_author.AppReq.Operation>}
 */
proto.grpc_author.AppReq.prototype.getOperationsList = function() {
  return /** @type{!Array<!proto.grpc_author.AppReq.Operation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.grpc_author.AppReq.Operation, 4));
};


/**
 * @param {!Array<!proto.grpc_author.AppReq.Operation>} value
 * @return {!proto.grpc_author.AppReq} returns this
*/
proto.grpc_author.AppReq.prototype.setOperationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.grpc_author.AppReq.Operation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.grpc_author.AppReq.Operation}
 */
proto.grpc_author.AppReq.prototype.addOperations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.grpc_author.AppReq.Operation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.grpc_author.AppReq} returns this
 */
proto.grpc_author.AppReq.prototype.clearOperationsList = function() {
  return this.setOperationsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpc_author.AppRes.prototype.toObject = function(opt_includeInstance) {
  return proto.grpc_author.AppRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpc_author.AppRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpc_author.AppRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpc_author.AppRes}
 */
proto.grpc_author.AppRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpc_author.AppRes;
  return proto.grpc_author.AppRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpc_author.AppRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpc_author.AppRes}
 */
proto.grpc_author.AppRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.grpc_author.AppRes.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpc_author.AppRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpc_author.AppRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpc_author.AppRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpc_author.AppRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.grpc_author.AppRes.Status = {
  OK: 0,
  ERROR: 1
};

/**
 * optional Status status = 1;
 * @return {!proto.grpc_author.AppRes.Status}
 */
proto.grpc_author.AppRes.prototype.getStatus = function() {
  return /** @type {!proto.grpc_author.AppRes.Status} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.grpc_author.AppRes.Status} value
 * @return {!proto.grpc_author.AppRes} returns this
 */
proto.grpc_author.AppRes.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


goog.object.extend(exports, proto.grpc_author);
