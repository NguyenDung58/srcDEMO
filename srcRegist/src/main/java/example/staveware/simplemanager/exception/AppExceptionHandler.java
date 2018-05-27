package example.staveware.simplemanager.exception;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.ModelAndView;

@ControllerAdvice
public class AppExceptionHandler {
	@ExceptionHandler(MethodArgumentNotValidException.class)
	@ResponseBody
	@ResponseStatus(value = HttpStatus.BAD_REQUEST)
	public Map<String, String> handleException(MethodArgumentNotValidException exp) {
		BindingResult result = exp.getBindingResult();
		List<FieldError> fieldErrors = result.getFieldErrors();
		StringBuffer buffer = new StringBuffer();
		for (FieldError fieldError : fieldErrors) {
			buffer.append(fieldError.getDefaultMessage());
		}
		Map<String, String> map = new HashMap<String, String>();
		map.put("message", buffer.toString());
		return map;
	}

	@ExceptionHandler(DuplicateKeyException.class)
	@ResponseBody
	@ResponseStatus(value = HttpStatus.BAD_REQUEST)
	public Map<String, String> handleException(DuplicateKeyException exp) {
		Map<String, String> map = new HashMap<String, String>();
		map.put("message", exp.getMessage());
		return map;
	}

	@ExceptionHandler(Exception.class)
	public ModelAndView handleException(Exception exception) {
		exception.printStackTrace();
		ModelAndView modelAndView = new ModelAndView("error");
		String message = exception.getMessage();
		modelAndView.addObject("errorMessage", message);
		return modelAndView;
	}
}