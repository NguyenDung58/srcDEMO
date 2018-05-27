package example.staveware.simplemanager.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import example.staveware.simplemanager.dataset.Member;
import example.staveware.simplemanager.service.MemberService;

@Controller
public class SpaController {
	@Autowired
	private MemberService service;

	@RequestMapping(value = "member", method = RequestMethod.GET, consumes = "application/json; charset=UTF-8", produces = "application/json; charset=UTF-8")
	@ResponseBody
	public List<Member> selectMember() {
		return service.findAll();
	}

	@RequestMapping(value = "member/**", method = RequestMethod.POST, consumes = "application/json; charset=UTF-8", produces = "application/json; charset=UTF-8")
	@ResponseBody
	public Member createMember(@Validated @RequestBody Member member) {
		service.create(member);
		return member;
	}

	@RequestMapping(value = "member/{userid}", method = RequestMethod.DELETE, consumes = "application/json; charset=UTF-8", produces = "application/json; charset=UTF-8")
	@ResponseBody
	public void deleteMember(@PathVariable("userid") String userid) {
		service.delete(userid);
	}
}