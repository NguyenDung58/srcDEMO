package example.staveware.simplemanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import example.staveware.simplemanager.dataset.Member;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<Member, String> {
}