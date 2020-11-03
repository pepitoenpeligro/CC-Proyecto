(function() {var implementors = {};
implementors["base64"] = [{"text":"impl&lt;'a, R:&nbsp;Read&gt; Read for DecoderReader&lt;'a, R&gt;","synthetic":false,"types":[]}];
implementors["buf_redux"] = [{"text":"impl&lt;R:&nbsp;Read, P:&nbsp;ReaderPolicy&gt; Read for BufReader&lt;R, P&gt;","synthetic":false,"types":[]},{"text":"impl&lt;R:&nbsp;Read&gt; Read for Unbuffer&lt;R&gt;","synthetic":false,"types":[]}];
implementors["bytes"] = [{"text":"impl&lt;B:&nbsp;Buf + Sized&gt; Read for Reader&lt;B&gt;","synthetic":false,"types":[]}];
implementors["mio"] = [{"text":"impl Read for TcpStream","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Read for &amp;'a TcpStream","synthetic":false,"types":[]}];
implementors["multipart"] = [{"text":"impl&lt;M:&nbsp;ReadEntry&gt; Read for MultipartData&lt;M&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Read for DataReader&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["rand_core"] = [{"text":"impl Read for dyn RngCore","synthetic":false,"types":[]}];
implementors["socket2"] = [{"text":"impl Read for Socket","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Read for &amp;'a Socket","synthetic":false,"types":[]}];
implementors["tempfile"] = [{"text":"impl Read for NamedTempFile","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Read for &amp;'a NamedTempFile","synthetic":false,"types":[]},{"text":"impl Read for SpooledTempFile","synthetic":false,"types":[]}];
implementors["tungstenite"] = [{"text":"impl&lt;S:&nbsp;Read, T:&nbsp;Read&gt; Read for Stream&lt;S, T&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()